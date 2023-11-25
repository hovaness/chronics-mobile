import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import supabase from '../lib/supabase'
import { useNavigation } from '@react-navigation/native'
import { useContextForLog } from '../context/contextForLog'
import { GreetingScreenNavigationProp, RootScreenNavigationProp } from '../types.nav'
import { useUserContext } from '../context/contexUser'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function () {
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_ID, // client ID of type WEB for your server (needed to verify user ID and offline access). Required to get the `idToken` on the user object!
  })
  const navigation = useNavigation<RootScreenNavigationProp>()

  const { user, setUser, setIsLog } = useUserContext()
  function addInContextAndNavigate() {
    setIsLog((prev) => !prev)

    navigation.navigate('Root', {screen: 'Home'})
  }

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      if (userInfo.idToken) {
        const { data, error } = await supabase.auth.signInWithIdToken({
          provider: 'google',
          token: userInfo.idToken,
        })
      } else {
        throw new Error('no ID token present!')
      }
      await AsyncStorage.setItem("user", JSON.stringify(userInfo.user));
      setUser(userInfo.user)
      setIsLog((prev) => !prev)
      navigation.navigate('Root', { screen: 'Home' })
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    } 
  }

    return(
        <GoogleSigninButton
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={()=> signIn()}
        />
    )
}
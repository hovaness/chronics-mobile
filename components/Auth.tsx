import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import supabase from '../lib/supabase';

export default function(){
    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_ID, // client ID of type WEB for your server (needed to verify user ID and offline access). Required to get the `idToken` on the user object!
    });
    const signIn = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        if(userInfo.idToken){
          const {data, error} = await supabase.auth.signInWithIdToken({
            provider:'google',
            token: userInfo.idToken,
          })
          console.log(error, data)
        }else{
          throw new Error("ID токен не был предоставлен")
        }
        console.log(JSON.stringify(userInfo,null,2))
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          
        } else if (error.code === statusCodes.IN_PROGRESS) {

        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

        } else {

        }
      }
    };

    return(
        <GoogleSigninButton
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={async()=> signIn()}
        />
    )
}
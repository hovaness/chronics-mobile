import {
  StyleSheet,
} from 'react-native'

export const styles = StyleSheet.create({
    image: {
      width: 130,
      height: 200,
      marginTop: 5,
      marginBottom: 10,
      borderRadius: 12,
      marginRight: 12,
    },
    description: {
      overflow: 'hidden',
      maxHeight: 170,
      maxWidth: 205,
      fontSize: 12,
      color: 'rgba(0, 0, 0, 0.6)',
      marginTop: 5,
    },
    View: {
      marginBottom: 20,
      backgroundColor: '#8A6B3F',
      marginRight: 10,
      marginLeft: 8,
      borderRadius: 14,
      flexDirection: 'row',
      position: 'relative',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0, 0, 0, 0.1)',
      borderBottomStyle: 'solid',
    },
    Tittle: {
      maxWidth: 200,
      fontSize: 17,
      fontWeight: '700',
    },
    ButtonText: {
      fontSize: 12,
      textAlign: 'center',
    },
    Button: {
      backgroundColor: '#F9CA9C',
      width: 120,
      height: 40,
      padding: 12,
      borderRadius: 10,
      marginLeft: 75,
      marginTop: 15,
    },
    Details: {
      marginLeft: 5,
    },
  })
import React, {useState}from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { ScrollView } from 'react-native';
// import ContactList from './components/ContactList'; 
// import Message from './components/Message';
// import SearchBar from './components/SearchBar';
// import NewText from './components/NewText';
// import VerticalContact from './components/VerticalContact';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import * as Yup from 'yup';
import {Formik} from 'formik';
import { View } from 'react-native/types_generated/index';
import { ScrollView } from 'react-native/types_generated/index';


const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'should be at least 4 characters')
  .max(16, 'should be at most 16 characters')
  .required('Length is required'),
})


const App = () => {

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const[lowerCase, setlowerCase] = useState(true)
  const[upperCase, setupperCase] = useState(false)
  const[numbers, setNumbers] = useState(false)
  const[symbols, setSymbols] = useState(false)
  
  const createPassword = (characters:string,
    passwordLength:number
  ) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const  characterIndex =Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
  }return result
 

  const generatedPasswordString = (passwordLength:
    number) => {
      let characterList = '';
      const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
      const digitChars = '0123456789';
      const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
      if(upperCase){
        characterList += upperCaseChars

      }
      if(lowerCase){
        characterList += lowerCaseChars
    }
      if(numbers){
        characterList += digitChars
      }
      if(symbols){
        characterList += specialChars
      }

      const passwordResult = createPassword(characterList, passwordLength)

      setPassword(passwordResult)
      setIsPassGenerated(true)
  }



  
}
const resetPasswordState = () =>{
  setPassword('')
  setIsPassGenerated(false)
  setlowerCase(true)
  setupperCase(false)
  setNumbers(false)
  setSymbols(false)
}
return (
    // <SafeAreaView>
    //   <ScrollView>
    //     <Message/>
    //     <SearchBar/>
    //     <NewText/>
    //     <ContactList/>
    //     <VerticalContact/>
    //   </ScrollView>
    // </SafeAreaView>
    <ScrollView keyboardShouldPersistTaps='handled'>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer} >
          <Text style={styles.title}>Password Generator</Text>

          <Formik
       initialValues={{ email: '', password: '' }}
       validationSchema={PasswordSchema}
       onSubmit={ values => {
        console.log(values);
        generatePasswordString(+values.passwordLength)//todo
       }}
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         
         handleSubmit,
         handleReset,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
        </View>
      </SafeAreaView>

    </ScrollView>

  )
}
const styles = StyleSheet.create({

});
export default App

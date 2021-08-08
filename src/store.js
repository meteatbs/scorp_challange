import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../src/components/Login/store/LoginSlicer'
import languageReducer from './components/PickLanguage/store/LanguageSlicer';



export default configureStore({
    reducer: {
        login:loginReducer,
        language:languageReducer
    },
  });
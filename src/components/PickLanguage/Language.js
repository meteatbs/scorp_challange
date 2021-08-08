// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import './style.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { selectAppState, setlang } from './store/LanguageSlicer';
// import { Dropdown, DropdownButton, Image } from 'react-bootstrap';
// import PropTypes from 'prop-types'; // ES6

// Language.propTypes = {
// 	className: PropTypes.string,
// };
// export default function Language(props) {
// 	const dispatch = useDispatch();
// 	const { i18n } = useTranslation();
// 	// const lang = useSelector(selectAppState).lang;

// 	var handleChange = (e) => {
//         console.log(e)
// 		dispatch(setlang(e));
// 		i18n.changeLanguage(e);
// 	};

//     // const changeLanguage = (lng) => {
//     //     console.log(lng)
//     //     dispatch(setlang(lng));
//     //     i18n.changeLanguage(lng)
//     //   }

// 	return (
// 		// <select
// 		// 	value={lang}
// 		// 	onChange={handleChange}
// 		// 	name="lang"
// 		// 	id="lang"
// 		// 	className={'local-picker ' + props.className}
// 		// >
// 		// 	<option value="en">English</option>
// 		// 	<option value="tr">Türkçe</option>
// 		// </select>
//         <DropdownButton id="dropdown-item-button" title="language" variant="secondary" className=" text-secondarymx-1 my-1">
//                         <Dropdown.Item as="button" onClick={() => handleChange('en')}><Image  height={30} width={30}  className="mx-1  text-secondary"/>
//                             en</Dropdown.Item>
//                         <Dropdown.Item as="button" onClick={() => handleChange('tr')}><Image  height={30} width={30} className="mx-1  text-secondary"/>
//                             tr</Dropdown.Item>
//                     </DropdownButton>
// 	);
// }

import React from "react";
import Contact_view from "./Components/Contact_view";
import Add_contact from "./Components/Add_contact";
import Edit_contact from "./Components/Edit_contact";
import Contact_details from "./Components/Contact_details";
import { Route, Routes } from "react-router-dom";
function App(){
  return<>
  <Contact_view/>
  <Routes>
  <Route path='/addcontact' element={<Add_contact/>}></Route>
  <Route path='/viewcontact' element={<Contact_details/>}></Route>
  <Route path='/editcontact' element={<Edit_contact/>}></Route>
  </Routes>
  </>
}
export default App;

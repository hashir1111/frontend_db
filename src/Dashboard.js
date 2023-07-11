import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './index.css';
class Dashboard extends React.Component {
    sidebarToggle() {
        var sidebar = document.getElementById('sidebar');
       
        if (sidebar.style.display === "none") {
            sidebar.style.display = "block";
        } else {
            sidebar.style.display = "none";
        }
    }
     profileToggle() {
      var profileDropdown = document.getElementById('ProfileDropDown');
        if (profileDropdown.style.display === "block") {
            profileDropdown.style.display = "none";
        } else {
            profileDropdown.style.display = "block";
        }
    }
render() {
  return (
    <div class="mx-auto bg-grey-400">
   
    <div class="min-h-screen flex flex-col">
       
        <header class="bg-nav">
            <div class="flex justify-between">
                <div class="p-1 mx-3 inline-flex items-center">
                    <i class="fas fa-bars pr-2 text-white" onClick={this.sidebarToggle}></i>
                    <h1 class="text-white p-2">Logo</h1>
                </div>
                <div class="p-1 flex flex-row items-center">
                    <img  onClick={this.profileToggle} class="inline-block h-8 w-8 rounded-full" src="https://therichpost.com/wp-content/uploads/2021/03/avatar2.png" alt="" />
                    <a href="#" onClick={this.profileToggle}  class="text-white p-2 no-underline hidden md:block lg:block">Jassa The Rich</a>
                    <div id="ProfileDropDown" class="rounded hidden shadow-md bg-white absolute pin-t mt-12 mr-1 pin-r">
                        <ul class="list-reset">
                          
                          <li><hr class="border-t mx-2 border-grey-ligght" /></li>
                          <li><a href="#" class="no-underline px-4 py-2 block text-black hover:bg-grey-light">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
      

        <div class="flex flex-1">
          
            <aside id="sidebar" class="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block">

                <ul class="list-reset flex flex-col">
                    <li class=" w-full h-full py-3 px-2 border-b border-light-border bg-white">
                        <a href="#"
                           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fas fa-tachometer-alt float-left mx-2"></i>
                            Dashboard
                            <span><i class="fas fa-angle-right float-right"></i></span>
                        </a>
                    </li>
                    
                </ul>

            </aside>
           
            
          
        </div>
       
        
     
    </div>
</div>
  );
  
}

}
export default Dashboard;
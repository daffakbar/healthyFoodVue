<template>
 <div id="example1">
   <span v-on:click="darkModeOn()"
     className="flex items-center justify-center w-10 h-10 text-white bg-indigo-500 rounded-full shadow-lg cursor-pointer"
     >
     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
         d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
     </svg>
     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
         d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
       </path>
     </svg>

   </span>

 </div>
</template>
 
<script>

// import { useState, useEffect } from 'vue3-hooks';

// export default function useDarkMode(){
//   // const [colorTheme, setTheme] = useDarkMode();
//   const [theme, setTheme] = useState('light');
//     const colorTheme = theme === 'light' ? 'dark' : 'light';
//     useEffect(() => {
//         const root = window.document.documentElement;

//         root.classList.remove(colorTheme);
//         root.classList.add(theme);
//     }, [theme, colorTheme]); 
//     return [colorTheme, setTheme];
// }

// export default {
//   components: {
//     SearchFocus,
//   },computed: {
//     darkModeOn() {
//       document.querySelector("html").classList.add("dark");
//     },
//     darkModeOn() {
//       document.querySelector("html").classList.add("dark");
//     }

//   }

// function darkModeOn() {
//   document.querySelector("html").classList.add("dark");
// }

// function darkModeOff() {
//   document.querySelector("html").classList.add("light");
// }
export default {
  props: {
    theme: {
      type: String,
      required: true,
    }
  },
  methods: {
    darkModeOn() {
      document.querySelector("html").classList.add("dark");
  },
    darkModeOff() {
      document.querySelector("html").classList.add("light");
  },
    Off() {
      localStorage.theme = 'light';
  },
    On() {
      localStorage.theme = 'light';
  }
}
}
</script>
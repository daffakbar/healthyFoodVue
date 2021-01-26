<template>
  <div>
    
        <section className="py-5 transition duration-700 bg-gray-50 dark:bg-gray-800">
       <div className="container max-w-5xl m-8 mx-auto">
         <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800 scroll1 dark:text-gray-100">
           Popular Healthy Food
         </h1>
         <div className="flex justify-center ">
           <button className="px-4 my-6 rounded-full dark:bg-pinkcard dark:text-gray-100 bg-pinklight text-pinkred">Salad</button>
           <button className="px-4 my-6 rounded-full dark:text-gray-200 " >Juice</button>
           <!-- {/* <button className="px-4 my-6 rounded-full dark:text-gray-200 " onClick={setUrls('https://raw.githubusercontent.com/daffakbar/testcoba/main/api/v1/data.json')}>Juice</button> */} -->
           <button className="px-4 my-6 rounded-full dark:text-gray-200 ">Smoothies</button>
           <button className="px-4 my-6 rounded-full dark:text-gray-200 ">Yogurt</button>
         </div>
       
       <div className="container px-4 mx-auto my-6 md:px-12">
         <div className="flex flex-wrap -mx-1 lg:-mx-4">
           <!-- {salads.map((salad, i)=> ( -->
             <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 ">
  
               <article className="overflow-hidden rounded-lg shadow-lg dark:bg-pinkcard bg-pinklight">
  
                 <a href="#">
                   <img alt="Placeholder" className="block w-auto h-auto p-3" src="https://i.ibb.co/7pxZw3f/circle-cropped.png"/>
                 </a>
  
                 <header className="flex items-center justify-center p-2 leading-tight md:p-4">
                   <img src="../assets/star.svg" className="mx-1" width="12" alt=""/>
                   <img src="../assets/star.svg" className="mx-1" width="12" alt=""/>
                   <img src="../assets/star.svg" className="mx-1" width="12" alt=""/>
                   <img src="../assets/star.svg" className="mx-1" width="12" alt=""/>
                   
                 </header>
                 <section className="flex items-center justify-center text-base dark:text-gray-100">
                   Premium salad
                 </section>
  
                 <footer className="flex justify-between p-2 leading-none md:p-4">
                   <a className="flex items-center text-black no-underline hover:underline" href="#">
                     <button className="px-5 py-1 text-white rounded-full dark:bg-darkaddcard bg-pinkred">
                       Add +
                     </button>
                     
                   </a>
                   <p className="ml-2 text-sm font-bold dark:text-gray-200 text-pinkred">
                     <!-- ${salad.hargaSalad} -->
                     $ 35.00
                   </p>
                   
                 </footer>
               </article>  
             
             </div>
             <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 ">
  
               <article className="overflow-hidden rounded-lg shadow-lg dark:bg-pinkcard bg-pinklight">
  
                 <a href="#">
                   <img alt="Placeholder" className="block w-auto h-auto p-3" src="https://i.ibb.co/pJjDgmf/circle-cropped-2.png"/>
                 </a>
  
                 <header className="flex items-center justify-center p-2 leading-tight md:p-4">
                   <img src="../assets/star.svg" className="mx-1" width="12" alt=""/>
                   <img src="../assets/star.svg" className="mx-1" width="12" alt=""/>
                   <img src="../assets/star.svg" className="mx-1" width="12" alt=""/>
                   <img src="../assets/star.svg" className="mx-1" width="12" alt=""/>
                   
                 </header>
                 <section className="flex items-center justify-center text-base dark:text-gray-100">
                   Green salad
                 </section>
  
                 <footer className="flex justify-between p-2 leading-none md:p-4">
                   <a className="flex items-center text-black no-underline hover:underline" href="#">
                     <button className="px-5 py-1 text-white rounded-full dark:bg-darkaddcard bg-pinkred">
                       Add +
                     </button>
                     
                   </a>
                   <p className="ml-2 text-sm font-bold dark:text-gray-200 text-pinkred">
                     <!-- ${salad.hargaSalad} -->
                     $ 24.00
                   </p>
                   
                 </footer>
               </article>  
             
             </div>
             <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 ">
  
               <article className="overflow-hidden rounded-lg shadow-lg dark:bg-pinkcard bg-pinklight">
  
                 <a href="#">
                   <img alt="Placeholder" className="block w-auto h-auto p-3" src="https://i.ibb.co/VLYjSY1/circle-cropped-3.png"/>
                 </a>
  
                 <header className="flex items-center justify-center p-2 leading-tight md:p-4">
                   <img src="../assets/star.svg" className="mx-1" width="12" alt=""/>
                   <img src="../assets/star.svg" className="mx-1" width="12" alt=""/>
                   <img src="../assets/star.svg" className="mx-1" width="12" alt=""/>
                   <img src="../assets/star.svg" className="mx-1" width="12" alt=""/>
                   
                 </header>
                 <section className="flex items-center justify-center text-base dark:text-gray-100">
                   Fruits salad
                 </section>
  
                 <footer className="flex justify-between p-2 leading-none md:p-4">
                   <a className="flex items-center text-black no-underline hover:underline" href="#">
                     <button className="px-5 py-1 text-white rounded-full dark:bg-darkaddcard bg-pinkred">
                       Add +
                     </button>
                     
                   </a>
                   <p className="ml-2 text-sm font-bold dark:text-gray-200 text-pinkred">
                     <!-- ${salad.hargaSalad} -->
                     $ 19.00
                   </p>
                   
                 </footer>
               </article>  
             
             </div>
             <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 ">
  
               <article className="overflow-hidden rounded-lg shadow-lg dark:bg-pinkcard bg-pinklight">
  
                 <a href="#">
                   <img alt="Placeholder" className="block w-auto h-auto p-3" src="https://i.ibb.co/zQrCC0m/circle-cropped-4.png"/>
                 </a>
  
                 <header className="flex items-center justify-center p-2 leading-tight md:p-4">
                   <img src="../assets/star.svg" className="mx-1" width="12" alt=""/>
                   <img src="../assets/star.svg" className="mx-1" width="12" alt=""/>
                   <img src="../assets/star.svg" className="mx-1" width="12" alt=""/>
                   <img src="../assets/star.svg" className="mx-1" width="12" alt=""/>
                   
                 </header>
                 <section className="flex items-center justify-center text-base dark:text-gray-100">
                   Pasta salad
                 </section>
  
                 <footer className="flex justify-between p-2 leading-none md:p-4">
                   <a className="flex items-center text-black no-underline hover:underline" href="#">
                     <button className="px-5 py-1 text-white rounded-full dark:bg-darkaddcard bg-pinkred">
                       Add +
                     </button>
                     
                   </a>
                   <p className="ml-2 text-sm font-bold dark:text-gray-200 text-pinkred">
                     <!-- ${salad.hargaSalad} -->
                     $ 29.00
                   </p>
                   
                 </footer>
               </article>  
             
             </div>

          
           

         </div>
       </div>
         
       </div>
 </section>
     
 </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
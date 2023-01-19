let NavList = {
    props : ["title", "links"],  
    
    template : `
    <nav>
        <h2 class="navTitle">{{ title }}</h2>
        <ul>
            <li v-for="link in links">{{ link }}</li>
        </ul>
    </nav>
    `
};
  
export { NavList };
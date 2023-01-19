import { Nav } from './nav.js'

let Header = {  
    data() {  
        return {  
            titles : ["Accueil", "A propos", "Contact"] 
        } ;
    },  
    
    components: {
        Nav
    },
    
    template : `
    <header>
    <Nav :titles="this.titles"/>
    </header>
    `
};

export { Header };
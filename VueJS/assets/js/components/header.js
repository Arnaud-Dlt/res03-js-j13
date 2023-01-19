import { Nav } from './nav.js'

let Header = {  
    data() {  
        return {  
            lists : [  
                {  
                    text : "Accueil"
                },
                {  
                    text : "A Propos"   
                },  
                {  
                    text : "Contact"
                }  
            ] 
        } ;
    },  
    
    components: {
        Nav
    },
    
    template : `
    <header>
    <Nav/>
    </header>
    `
};

export { Header };
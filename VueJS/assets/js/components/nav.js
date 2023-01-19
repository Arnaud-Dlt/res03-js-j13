let Nav = {  
    data() {  
        return {  
        };
    },
    
    props : [  
        "titles"
    ], 
    
    template : `
    <nav>
        <ul>
            <li v-for="title in titles">{{ title }}</li>
        </ul>
    </nav>
    `
};

export { Nav };
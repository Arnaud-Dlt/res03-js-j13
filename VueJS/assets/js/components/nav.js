let Nav = {  
    data() {  
        return {  
        };
    },  
    props : [  
        "text"
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
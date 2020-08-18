var listado = []
function mostrar(array){
    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let category = array[i];
        htmlContentToAppend +=`
        <div>
        <img src=` + category.imgSrc + ` alt=` + category.description + `></img>
        <h4>`+ category.name + `</h4>
                        
                    
        <p>` + category.soldCount + ` artículos</p>
    
    <p>`+ category.description +  `</p>
    <p>`+ category.currency + ``+ category.cost +  `</p>
       
        </div>
        `
        
    }
    document.getElementById("productos").innerHTML = htmlContentToAppend;
}
    



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            categoriesArray = resultObj.data;
            //Muestro las categorías ordenadas
         mostrar(categoriesArray)
        }
    });
});
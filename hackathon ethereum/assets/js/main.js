const contenedor = document.querySelector('#dinamic');
const btnAgregar = document.querySelector('#agregar');

let total = 1;

btnAgregar.addEventListener('click', e =>{
    let div = document.createElement('div');
div.innerHTML =  `<label>${total++}</label> - <input type="Text" name="nombre[]" placeholder="nombre" required><button onclick = "eliminar(this)"> Eliminar</button>`;
contenedor.appendChild(div);
})

cons eliminar = (e) => {
    const divPadre = e.parentNode;
    contenedor.removeChild(divPadre);
    actualizarContador();
};

const actualizarContador = () => {
    let divs = contenedor.children;
    total = 1
    for (let i = 0; i < divs.length; i++){
        divs[i].children[0].innerHTML = total++;
    }
}
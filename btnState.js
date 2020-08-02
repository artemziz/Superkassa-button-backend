let btn = false;

const getBtn = () =>{
    return btn;
};

const switchBtn = () =>{
    btn = !btn;
};

module.exports = {getBtn, switchBtn};

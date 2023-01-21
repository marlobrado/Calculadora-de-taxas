import * as yup from "yup";

let min = 1000;

const schema = yup.object().shape({
    amount: yup
        .number()
        .required("obrigatório")
        .min(min, `deve ser maior que ${min}`)
        .typeError("obrigatório"),
    installments: yup
        .number()
        .required("obrigatório")
        .max(12, "máximo 12").min(1, 'minimo 1')
        .typeError("obrigatório"),
    mdr: yup
        .number()
        .required("obrigatório")
        .typeError("obrigatório")
        .max(50, 'maximo 50'),
});

export default schema
"use client";
import React, { useState, useEffect } from "react";
import "../style/forms.css";

const FormsBox = () => {
    const [formConfig, setFormConfig] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [inputs, setInputs] = useState({
        campo1: "",
        campo2: "",
        campo3: "",
        campo4: "",
        verificacao: ""
    });
    const [submitStatus, setSubmitStatus] = useState("");

    useEffect(() => {
        fetch("http://backend.local/wp-json/wp/v2/pages/47")
            .then((response) => response.json())
            .then((data) => {
                setFormConfig({
                    title: data.acf.title,
                    subtitle: data.acf.subtitle,
                    note: data.acf.note,
                    verification: data.acf.verification,
                    number1: data.acf.number1,
                    number2: data.acf.number2,
                    plus: data.acf.plus,
                    buttonText: data.acf.buttontext,
                    image: data.acf.image,
                });
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        if (!inputs.campo1 || !inputs.campo2 || !inputs.verificacao) {
            return false;
        }
        const expected = Number(formConfig.number1) + Number(formConfig.number2);
        if (Number(inputs.verificacao) !== expected) {
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            setSubmitStatus("Preencha os campos obrigatórios e verifique a soma corretamente.");
            return;
        }
        const submissionData = {
            title: "Form Submission",
            content: "",
            acf:{
                campo1: inputs.campo1,
                campo2: inputs.campo2,
                campo3: inputs.campo3,
                campo4: inputs.campo4,
            },
            status:"publish"
        };

        fetch("https://backend.local/wp-json/wp/v2/formulario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2JhY2tlbmQubG9jYWwiLCJpYXQiOjE3NDE3Mzk1NzEsIm5iZiI6MTc0MTczOTU3MSwiZXhwIjoxNzQyMzQ0MzcxLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.-P31R4MOuR2eYIz-P1hTcQ22aWRFG7aaZn7e3RPlmkk',
            },
            body: JSON.stringify(submissionData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao enviar o formulário");
                }
                return response.json();
            })
            .then((data) => {
                setSubmitStatus("Formulário enviado com sucesso!");
                setInputs({
                    campo1: "",
                    campo2: "",
                    campo3: "",
                    campo4: "",
                    verificacao: ""
                });
            })
            .catch((err) => {
                setSubmitStatus(`Erro: ${err.message}`);
            });
    };

    if (loading) return <p></p>;
    if (error) return <p>Erro: {error.message}</p>;

    return (
        <div className="forms-box">
            <div className="image-container">
                <img src={formConfig.image} alt="Imagem de destaque" className="banner-image" />
            </div>
            <div className="form-container">
                <h2 className="form-title">{formConfig.title}</h2>
                <h4 className="form-subtitle">{formConfig.subtitle}</h4>
                <p className="form-note">*{formConfig.note}</p>
                <form className="form-content" onSubmit={handleSubmit}>
                    <div className="form-main">
                        <input type="text" name="campo1" placeholder="Categoria*" className="form-input" value={inputs.campo1} onChange={handleInputChange}/>
                        <input type="text" name="campo2" placeholder="Categoria*" className="form-input" value={inputs.campo2} onChange={handleInputChange}/>
                        <input type="text" name="campo3" placeholder="Categoria" className="form-input" value={inputs.campo3} onChange={handleInputChange}/>
                        <input type="text" name="campo4" placeholder="Categoria" className="form-input" value={inputs.campo4} onChange={handleInputChange}/>
                    </div>
                    <div className="form-verificacao">
                        <h3>{formConfig.verification}</h3>
                        <div className="verificacao-main">
                            <div className="numerosDeVerificacao">
                                <h3 className="number">{formConfig.number1}</h3>
                                <h3 className="plus">{formConfig.plus}</h3>
                                <h3 className="number">{formConfig.number2}</h3>
                            </div>
                            <h3 className="equal">=</h3>
                            <input type="text" name="verificacao" placeholder="Resultado*" className="input-verificacao" value={inputs.verificacao} onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="form-button">
                        {formConfig.buttonText}
                    </button>
                    {submitStatus && <p>{submitStatus}</p>}
                </form>
            </div>
        </div>
    );
};

export default FormsBox;

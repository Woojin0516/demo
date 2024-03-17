import './../App.css';
import {useRef, useState} from "react";
import { Button , InputGroup , Form} from "react-bootstrap";
import button from "bootstrap/js/src/button";
import axios from "axios";

const MAIN = function (){

    const [placeholder, setPlaceholder] = useState("첨부파일");

    const  onFileChanges = function(e){
        console.log(e.target.files)
    }


    const uploadFiles = axios.create({
        baseURL : "",
        headers : {"Content-Type" : "multipart/form-data"},
        timeout : 5000
    })

    const  onFileChages = ({target : {files} })  =>{
        uploadFiles
            .post("/upload")
            .then()
    }



    return(
        <div className="main-bg">
            <InputGroup className="mb-3" >
                <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    type="file"
                    accept= "image/png , image/jpeg , image/jpg"
                    onChange={(e)=> onFileChanges(e)}
                    style={{
                        Button : {
                            display : "none"
                        }

                    }}
                />
            </InputGroup>
        </div>
    )

}

export default MAIN;
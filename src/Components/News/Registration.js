import React, {Component} from 'react';
import './Registration.css';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/storage';
import Input from './../Input/Input';
import InputFile from './../Input/InputFile';
import Button from './../Button/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
//import fire from './../../Fire';
//import renderHTML from 'react-render-html';


const storage=firebase.storage();

class Registration extends Component{
        state={
            username: '',
            usersArray: '',
            userslist: '',
            usersListLength: 10,

            selectedFile: {name: 'Фото новини шириною 350px'},
          
            //progress: 0,
            //url:'', 
            inputNewsDate: ' ',
            inputNewsName: '',
            inputNewsText: ' ',

            isNameEmailPhoneValid: 'true',
            isFormSelectValid: 'false',
            isFormUploadValid: 'false',
            isFormValid: 'false'
        }
                                 //Получение userslist.json с сервера
        componentDidMount(){
            axios.get('https://abzagency.firebaseio.com/news.json').then(response =>{
                this.setState({usersArray: response, userslist: Object.values(response), usersListLength: Object.values(Object.values(response.data))});
            });
        }
          
        handleChangeName = (event) =>{

                    //Запись в State введенных в Input-ы данных Name, Text
            this.setState({inputNewsName: event.target.value});
                console.log(event.target);
        }
        onHandleChange = (event)=>{
            this.setState({inputNewsText: event});
             console.log(event);
        }

                         //Запись в State фотографии из формы Input и ее валидация
        handleChangeFile =event=> {
            const selectedFile=event.target.files[0];
            this.setState({selectedFile});
            let isFormValid= this.state.isFormValid;
            let isFormUploadValid = selectedFile.name !== " Завантажте фото шириною 350px.";
            isFormValid = this.state.isNameEmailPhoneValid && this.state.isFormSelectValid && isFormUploadValid; 
            this.setState({ isFormValid}, () => { console.log( this.state.isFormValid);  });
            console.log('file:  ', selectedFile.name !== " Upload your photo");     //проверка валидации
        }

                                //Формирование нового User и внесения в список userslist.json на сервере 
        fileUploadHandler =(e) =>{
            e.preventDefault();

            // Upload file
            const permissionWriteEmail=this.props.permissionWriteEmail;
            console.log(this.props, permissionWriteEmail);
            const permissionWrite='galinapro@gmail.com_Snezana2240@gmail.com_uhl-edu@ukr.net_sanyoksanyok@i.ua'.match(permissionWriteEmail);
            console.log(permissionWrite);
            if(!permissionWrite){
                return(
                    alert('Вам заборонено додавати Новини')
                )
            }

            const {selectedFile}=this.state;    
            const uploadTask=storage.ref(`avatars/${selectedFile.name}`).put(selectedFile);
            uploadTask.on('state_changed', 
                (snapshot) =>{
                    const progress=Math.round(snapshot.bytesTransferred/snapshot.totalBytes*100);
                    this.setState({progress});
                }, 
                (error) =>{console.log(error)}, 
                () =>{
                    storage.ref('avatars').child(selectedFile.name).getDownloadURL().then(url =>{
                        this.setState({url});
                                            //Формирование нового User
                                            const dateFull=new Date();
                                            var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
                                            const dateNews=months[dateFull.getMonth()] + '.' + dateFull.getDate() + '.' + dateFull.getFullYear();

                                            console.log(dateNews);
                        const newUser={
                            //"id":Object.values(this.state.usersArray.data).length + 1,
                            "id":this.state.usersListLength.length + 1,
                            "picture":this.state.url,          
                            "name":this.state.inputNewsName,
                            "date": dateNews,
                            "text":this.state.inputNewsText,
                           
                        }
                        console.log(newUser);
                                            //Добавление нового User
                        axios.post('https://abzagency.firebaseio.com/news.json',  newUser).then(response => {
                           console.log( response );
                           alert('The new News has been added');
                        } 
                        ).catch(error => console.log(error));
                    });
                } 
            );     
        }
      
    render(){
        // const permissionWriteEmail=this.props.permissionWriteEmail;
        // console.log(this.props, permissionWriteEmail);
        // const permissionWrite='galinapro@gmail.com_Snezana2240@gmail.com_UUhl-edu@ukr.net'.match(permissionWriteEmail);
        //  console.log(permissionWrite);
        return (
           <div className='register'>
                <h3>Заповніть форму для додавання новини </h3>
                <div className='register__form'>
                    <form onSubmit={this.fileUploadHandler} >
                        <div>
                            <Input
                                    type={'text'}
                                    placeholder='Введіть назву новини'
                                     value={this.state.inputNewsName}
                                    name={'inputName'}
                                    onChange={event => this.handleChangeName(event)}
                            />
                        </div>
                         
                        <div className={'registerTextarea'}>
                            <ReactQuill
                                    modules={Registration.modules}
                                    formats={Registration.formats}
                                    placeholder='Введіть текст новини'
                                    onChange={event => this.onHandleChange(event)}
                                    value={this.state.inputNewsText}
                            />
                        </div>  
                
                        <div className={'registerTextarea'}>
                            <InputFile
                                    onChange={this.handleChangeFile}
                                    selectedFile={this.state.selectedFile}
                            />  
                        </div>

                        <Button  className="register__button" 
                                 onClick={ this.fileUploadHandler } 
                                 disabled={!this.state.isFormValid} 
                                 value="Додати Новину" 
                        />
                    </form>     
                </div>
            </div>
        )
    }
}

Registration.modules={
    toolbar:[
    [ {header: '1'}, {header: '2'}, {'font': []} ],
    [ {'size': []}],
    [ 'bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}],
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block']
    ]
}
Registration.formats=[
    'header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 
    'blockquote', 'list', 'bullet', 'link', 'image', 'video', 'code-block'
]
export default Registration;
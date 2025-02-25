import React,{useEffect,useState} from 'react';
import {db,clname} from '../firebase';
import {collection,getDocs} from 'firebase/firestore';
import Problem from './Problem';
import "./Home.css"


const Home = () => {
    const [problemList,setProblemList] = useState([]);
    useEffect(() =>{
        const getProlems = async () =>{
            const firebase_data = await getDocs(collection(db,clname));//authのデータをfetchするように要変更。
            setProblemList(firebase_data.docs.map((doc) => ({...doc.data() ,id:doc.id})));
            console.log(problemList);
        };
        getProlems();
    },[])
  return (
    <div className='Home'>
        <div>
        <button className='Button'>Create Virtual Contest</button>
        </div>
        <div>
            <label className='TitleProblemList'>ProblemList</label>
            <div className='ProblemContainer'>
                {problemList.map((problem_dict) => {
                    return (
                        <Problem key = {problem_dict.id} problem = {problem_dict} id = {problem_dict.id}></Problem>
                    )
                }) }
            </div>
        </div>
    </div>
  )
}

export default Home
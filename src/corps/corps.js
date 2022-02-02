
import './corps.css';
import Card from '../card/card';


function Corps(){
    let i=0
    
    function switchUp(test){
        if(i>test.length){
            i+=0;
        }else{
            i++
            console.log(i)
        }
        return test[i];
    }
    const entry = switchUp(i);
    return <div className='corps'>
        <div className='left'>
            <h1>Plat des Îles</h1>
            <div className='text'>
                Des spécialité mohoraises et comorienne chez vous en quelque click.
            </div>
            <div className='button more'><span>Voir plus</span></div>
        </div>
        <div className='right'>
            <div className='top'>
                <Card table={i}/>
                <div className='next'>
                    <img src="img/next.png" alt="next"/>
                </div>
            </div>
        </div>
    </div>
}

export default Corps;
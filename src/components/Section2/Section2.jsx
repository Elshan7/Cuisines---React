import React, { useContext } from 'react'
import "./Section2.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { globalContext } from '../context/GlobalProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button1 from '../Button1/Button1';


const Section2 = () => {
  const { allData,mode,loading} = useContext(globalContext);


  return (
    <section className={`sct2  d-flex flex-wrap gap-3 p-4 justify-content-center ${ mode ? "dark": null}`}>

      <h2 className='sct2-h2'>OUR MENU</h2>

   <div className="darkmode">
   <Button1 />
   </div>

{loading? "loading...": allData.map((item) => {
        return (
          <Card key={item.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.ingredients}</Card.Text>
              <Button variant="primary">Order {item.name}</Button>
            </Card.Body>
          </Card>
        );
      })}
  
    </section>
  )
}

export default Section2

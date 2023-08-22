import { useState, useEffect } from 'react';
import { getLos } from '../../../services/Api'; 
import { Button } from 'react-bootstrap';
import Navbar from "../../layout/Navbar/Navbar";
import { HiPlus } from "react-icons/hi";
import './Lo.css';
import SidebarMenu from '../../layout/SidebarMenu/SidebarMenu';

interface LoData {
  id: number;
  title: string;
  description: string;
  image: string;
}

function Lo() {
  const [los, setLos] = useState<LoData[]>([]);

  useEffect(() => {
    getLos()
      .then(response => {
        setLos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar LOs:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <SidebarMenu />
        </div>

        <div className="main col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div>
            <h1 className='text-center p-3'>
              Objetos de Aprendizagem
            </h1>
          </div>

          <div className='row'>
            {los.map(lo => (
              <div key={lo.id} className="col card border-success oa d-flex justify-content-center align-items-center">
                <div className="card-body text-center">
                  <h5 className="card-title">{lo.title}</h5>
                  <p className="card-text">{lo.description}</p>
                  <a href={`/${lo.id}`} className="btn btn-success">Ver Mais</a>
                </div>
              </div>
            ))}
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end p-2">
            <Button className=" custom-icon-button btn btn-danger me-md-2 rounded-circle">
              <HiPlus />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lo;

import { useEffect, useState } from "react";
import { Table, Modal, Form, Row, Col } from "react-bootstrap";
import { RequestModel } from "../../../core/models/requests.model";
import { SidebarAdmin } from "../SidebarAdmin";
import { GetRequestsService } from "../../../core/services/getRequests.service";
import { EditRequestService } from "../../../core/services/editRequets.service";
import "./style.css";
import Icon from "../../elements/Icon/inde";

export const Requests = () => {
  const [requests, setRequests] = useState<RequestModel[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [currentRequest, setCurrentRequest] = useState<RequestModel | null>(
    null,
  );
  const [editedData, setEditedData] = useState<RequestModel | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [messageToShow, setMessageToShow] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState(false);
  const [filteredRequests, setFilteredRequests] =
    useState<RequestModel[]>(requests);

  useEffect(() => {
    setRequests(GetRequestsService());
  }, []);

  const saveToLocalStorage = (updatedRequests: RequestModel[]) => {
    EditRequestService(updatedRequests);
  };

  const handleDelete = () => {
    if (deleteIndex !== null) {
      const updatedRequests = requests.filter((_, i) => i !== deleteIndex);
      setRequests(updatedRequests);
      setFilteredRequests(updatedRequests);
      saveToLocalStorage(updatedRequests);
      setShowConfirmModal(false);
    }
  };

  const confirmDelete = (index: number) => {
    setDeleteIndex(index);
    setShowConfirmModal(true);
  };

  const handleEdit = (index: number) => {
    setCurrentRequest(filteredRequests[index]);
    setEditedData(filteredRequests[index]);
    setShowModal(true);
  };

  const handleModalChange = (e: React.ChangeEvent<HTMLElement>) => {
    const { id, value } = e.target as HTMLInputElement | HTMLSelectElement;
    if (editedData) {
      setEditedData({ ...editedData, [id]: value });
    }
  };

  const handleSaveChanges = () => {
    if (editedData && currentRequest) {
      const updatedRequests = requests.map((request) =>
        request === currentRequest ? editedData : request,
      );
      setRequests(updatedRequests);
      saveToLocalStorage(updatedRequests);
      setShowModal(false);
    }
  };

  useEffect(() => {
    const results = requests.filter(
      (request) =>
        request.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.email.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredRequests(results);
  }, [searchTerm, requests]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleShowMessage = (mensaje: string) => {
    setMessageToShow(mensaje);
    setShowMessageModal(true);
  };

  return (
    <>
      <section className="requests-section py-5 ">
        <div className="container">
          <SidebarAdmin />

          <div className="container-search">
            <h2 className="text-center">Solicitudes</h2>

            <input
              type="text"
              placeholder="Buscar por nombre o email"
              className={`form-search ${search ? "" : "hidden-search"}`}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div
              className="button-search"
              onClick={() => setSearch(!search)}
            >
              <Icon size={30} color={"#ffff"} icon={"search"} />
            </div>
          </div>

          {filteredRequests.length === 0 ? (
            <p className="text-center">No hay solicitudes registradas.</p>
          ) : (
            <Table bordered hover variant="dark" responsive>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                  <th>País</th>
                  <th>Plan</th>
                  <th>Mensaje</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((request, index) => (
                  <tr key={index}>
                    <td>{request.nombre}</td>
                    <td>{request.email}</td>
                    <td>{request.telefono}</td>
                    <td>{request.pais}</td>
                    <td>{request.plan}</td>
                    <td>
                      <a
                        className="link-message"
                        onClick={() => handleShowMessage(request.mensaje)}
                      >
                        Ver Mensaje
                      </a>
                    </td>
                    <td>
                      <button
                        onClick={() => handleEdit(index)}
                        className="me-2 btn btn-outline-light btn-sm"
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => confirmDelete(index)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}

          <Modal
            className="modal-edit"
            show={showModal}
            onHide={() => setShowModal(false)}
          >
            <Modal.Header>
              <Modal.Title>Editar Solicitud</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {editedData && (
                <Form className="edit-form">
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="nombre">
                        <Form.Label>Nombre completo</Form.Label>
                        <Form.Control
                          type="text"
                          value={editedData.nombre}
                          onChange={handleModalChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          value={editedData.email}
                          onChange={handleModalChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="telefono">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                          type="text"
                          value={editedData.telefono}
                          onChange={handleModalChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="pais">
                        <Form.Label>País</Form.Label>
                        <Form.Control
                          type="text"
                          value={editedData.pais}
                          onChange={handleModalChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group controlId="plan" className="mb-3">
                    <Form.Label>Plan</Form.Label>
                    <Form.Control
                      as="select"
                      value={editedData.plan}
                      onChange={handleModalChange}
                    >
                      <option>Conociendo a la Luna</option>
                      <option>Vuelta a la Luna</option>
                      <option>Super Espacial</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              )}
            </Modal.Body>
            <Modal.Footer>
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button className="btn btn-primary" onClick={handleSaveChanges}>
                Guardar Cambios
              </button>
            </Modal.Footer>
          </Modal>

          <Modal
            show={showConfirmModal}
            onHide={() => setShowConfirmModal(false)}
            className="modal-confirm"
          >
            <Modal.Header>
              <Modal.Title>Confirmar Eliminación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>¿Estás seguro de que deseas eliminar esta solicitud?</p>
            </Modal.Body>
            <Modal.Footer>
              <button
                className="btn btn-secondary"
                onClick={() => setShowConfirmModal(false)}
              >
                Cancelar
              </button>
              <button className="btn btn-danger" onClick={handleDelete}>
                Eliminar
              </button>
            </Modal.Footer>
          </Modal>

          <Modal
            show={showMessageModal}
            onHide={() => setShowMessageModal(false)}
            className="modal-message"
          >
            <Modal.Header>
              <Modal.Title>Mensaje Completo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{messageToShow}</p>
            </Modal.Body>
            <Modal.Footer>
              <button
                className="btn btn-secondary"
                onClick={() => setShowMessageModal(false)}
              >
                Cerrar
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </section>
    </>
  );
};

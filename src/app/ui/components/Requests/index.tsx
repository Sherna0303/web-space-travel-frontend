import { useEffect, useState } from "react";
import { Table, Modal, Form, Row, Col, Pagination } from "react-bootstrap";
import { RequestModel } from "../../../core/models/requests.model";
import { SidebarAdmin } from "../SidebarAdmin";
import { GetRequestsService } from "../../../core/services/getRequests.service";
import { EditRequestService } from "../../../core/services/editRequets.service";
import "./style.css";
import Icon from "../../elements/Icon/inde";
import countries from "world-countries";

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
  const countryNames = countries.map((country) => country.name.common).sort();
  const [errors, setErrors] = useState<any>({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    setRequests(GetRequestsService());
  }, []);

  const saveToLocalStorage = (updatedRequests: RequestModel[]) => {
    EditRequestService(updatedRequests);
  };

  const handleDelete = () => {
    if (deleteIndex !== null) {
      const updatedRequests = requests.filter(
        (request) => request.id !== deleteIndex,
      );
      setRequests(updatedRequests);
      setFilteredRequests(updatedRequests);
      saveToLocalStorage(updatedRequests);
      setShowConfirmModal(false);
      handlePageChange(currentPage === 1 ? 1 : currentPage - 1);
    }
  };

  const confirmDelete = (id: number) => {
    setDeleteIndex(id);
    setShowConfirmModal(true);
  };

  const handleEdit = (id: number) => {
    const requestToEdit = requests.find((request) => request.id === id);
    if (requestToEdit) {
      setCurrentRequest(requestToEdit);
      setEditedData(requestToEdit);
      setShowModal(true);
    }
  };

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    if (editedData && currentRequest && validate(editedData)) {
      const updatedRequests = requests.map((request) =>
        request.id === currentRequest.id ? editedData : request,
      );
      setRequests(updatedRequests);
      setFilteredRequests(updatedRequests);
      saveToLocalStorage(updatedRequests);
      setShowModal(false);
    }
  };

  const handleModalChange = (e: React.ChangeEvent<HTMLElement>) => {
    const { id, value } = e.target as HTMLInputElement | HTMLSelectElement;
    if (editedData) {
      setEditedData({ ...editedData, [id]: value });
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRequests.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const validate = (data: RequestModel) => {
    const newErrors: any = {};

    if (!/^[a-zA-Z\s]+$/.test(data.nombre)) {
      newErrors.nombre = "El nombre solo debe contener letras.";
    }
    if (!/^\d+$/.test(data.telefono)) {
      newErrors.telefono = "El teléfono solo debe contener números.";
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
      newErrors.email = "Ingresa un correo electrónico válido.";
    }
    if (data.pais === "") {
      newErrors.pais = "Por favor, selecciona un país.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
              className={`form-search ${!search || requests.length === 0 ? "hidden-search" : ""}`}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div
              className={`button-search ${currentItems.length !== 0 ? "" : "hidden-search"}`}
              onClick={() => setSearch(!search)}
            >
              <Icon size={30} color={"#ffff"} icon={"search"} />
            </div>
          </div>

          {currentItems.length === 0 ? (
            <p className="text-center my-5">No hay solicitudes registradas.</p>
          ) : (
            <>
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
                  {currentItems.map((request) => (
                    <tr key={request.id}>
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
                          onClick={() => handleEdit(request.id)}
                          className="me-2 btn btn-outline-light btn-sm"
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => confirmDelete(request.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Pagination className="justify-content-center">
                <Pagination.First
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                />
                <Pagination.Prev
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {Array.from({ length: totalPages }, (_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
                <Pagination.Last
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </>
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
                          isInvalid={!!errors.nombre}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.nombre}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          value={editedData.email}
                          onChange={handleModalChange}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
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
                          isInvalid={!!errors.telefono}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.telefono}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="pais">
                        <Form.Label>País</Form.Label>
                        <Form.Control
                          as="select"
                          value={editedData.pais}
                          onChange={handleModalChange}
                          isInvalid={!!errors.pais}
                        >
                          <option value="">Seleccione un país</option>
                          {countryNames.map((pais) => (
                            <option key={pais} value={pais}>
                              {pais}
                            </option>
                          ))}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          {errors.pais}
                        </Form.Control.Feedback>
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

import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import { CustomerStatusCssClasses } from "../CustomersUIHelpers";
import { useCustomersUIContext } from "../CustomersUIContext";

const selectedCustomers = (entities, ids) => {
  const _customers = [];
  ids.forEach((id) => {
    const customer = entities.find((el) => el.id === id);
    if (customer) {
      _customers.push(customer);
    }
  });
  return _customers;
};

export function CustomersFetchDialog({ show, onHide }) {
  // Customers UI Context
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      ids: customersUIContext.ids,
    };
  }, [customersUIContext]);

  // Customers Redux state
  const { customers } = useSelector(
    (state) => ({
      customers: selectedCustomers(
        state.customers.entities,
        customersUIProps.ids
      ),
    }),
    shallowEqual
  );

  // if customers weren't selected we should close modal
  useEffect(() => {
    if (!customersUIProps.ids || customersUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customersUIProps.ids]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Fetch selected elements
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="timeline timeline-5 mt-3">
          {customers.map((customer) => (
            <div className="timeline-item align-items-start" key={`id${customer.id}`}>
              <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg text-right pr-3" />
              <div className="timeline-badge">
                <i
                  className={`fa fa-genderless text-${
                    CustomerStatusCssClasses[customer.status]
                  } icon-xxl`}
                />
              </div>
              <div className="timeline-content text-dark-50 mr-5">
                <span
                    className={`label label-lg label-light-${
                      CustomerStatusCssClasses[customer.status]
                    } label-inline`}
                  >
                    ID: {customer.id}
                </span>
                <span className="ml-3">{customer.lastName}, {customer.firstName}</span>                
              </div>
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-primary btn-elevate"
          >
            Ok
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

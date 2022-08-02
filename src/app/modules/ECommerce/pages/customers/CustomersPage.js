import React from "react";
import { Route } from "react-router-dom";
import { CustomersLoadingDialog } from "./customers-loading-dialog/CustomersLoadingDialog";
import { CustomerEditDialog } from "./customer-edit-dialog/CustomerEditDialog";
import { CustomerDeleteDialog } from "./customer-delete-dialog/CustomerDeleteDialog";
import { CustomersDeleteDialog } from "./customers-delete-dialog/CustomersDeleteDialog";
import { CustomersFetchDialog } from "./customers-fetch-dialog/CustomersFetchDialog";
import { CustomersUpdateStateDialog } from "./customers-update-status-dialog/CustomersUpdateStateDialog";
import { CustomersUIProvider } from "./CustomersUIContext";
import { CustomersCard } from "./CustomersCard";

export function CustomersPage({ history }) {
  const customersUIEvents = {
    newCustomerButtonClick: () => {
      history.push("/management/users/new");
    },
    openEditCustomerDialog: (id) => {
      history.push(`/management/users/${id}/edit`);
    },
    openDeleteCustomerDialog: (id) => {
      history.push(`/management/users/${id}`);
    },
    openDeleteCustomersDialog: () => {
      history.push(`/management/users/deleteCustomers`);
    },
    openFetchCustomersDialog: () => {
      history.push(`/management/users/fetch`);
    },
    openUpdateCustomersStatusDialog: () => {
      history.push("/management/users/updateStatus");
    }
  }

  return (
    <CustomersUIProvider customersUIEvents={customersUIEvents}>
      <CustomersLoadingDialog />
      <Route path="/management/users/new">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            onHide={() => {
              history.push("/management/users");
            }}
          />
        )}
      </Route>
      <Route path="/management/users/:id/edit">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/management/users");
            }}
          />
        )}
      </Route>
      <Route path="/management/users/deleteCustomers">
        {({ history, match }) => (
          <CustomersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/management/users");
            }}
          />
        )}
      </Route>
      <Route path="/management/users/:id">
        {({ history, match }) => (
          <CustomerDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/management/users");
            }}
          />
        )}
      </Route>
      <Route path="/management/users/fetch">
        {({ history, match }) => (
          <CustomersFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/management/users");
            }}
          />
        )}
      </Route>
      <Route path="/management/users/updateStatus">
        {({ history, match }) => (
          <CustomersUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/management/users");
            }}
          />
        )}
      </Route>
      <CustomersCard />
    </CustomersUIProvider>
  );
}

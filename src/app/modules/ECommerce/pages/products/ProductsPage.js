import React from "react";
import { Route } from "react-router-dom";
import { ProductsLoadingDialog } from "./products-loading-dialog/ProductsLoadingDialog";
import { ProductDeleteDialog } from "./product-delete-dialog/ProductDeleteDialog";
import { ProductsDeleteDialog } from "./products-delete-dialog/ProductsDeleteDialog";
import { ProductsFetchDialog } from "./products-fetch-dialog/ProductsFetchDialog";
import { ProductsUpdateStatusDialog } from "./products-update-status-dialog/ProductsUpdateStatusDialog";
import { ProductsCard } from "./ProductsCard";
import { ProductsUIProvider } from "./ProductsUIContext";

export function ProductsPage({ history }) {
  const productsUIEvents = {
    newProductButtonClick: () => {
      history.push("/management/customers/new");
    },
    openEditProductPage: (id) => {
      history.push(`/management/customers/${id}/edit`);
    },
    openDeleteProductDialog: (id) => {
      history.push(`/management/customers/${id}`);
    },
    openDeleteProductsDialog: () => {
      history.push(`/management/customers/deleteProducts`);
    },
    openFetchProductsDialog: () => {
      history.push(`/management/customers/fetch`);
    },
    openUpdateProductsStatusDialog: () => {
      history.push("/management/customers/updateStatus");
    },
  };

  return (
    <ProductsUIProvider productsUIEvents={productsUIEvents}>
      <ProductsLoadingDialog />
      <Route path="/management/customers/deleteProducts">
        {({ history, match }) => (
          <ProductsDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/management/customers");
            }}
          />
        )}
      </Route>
      <Route path="/management/customers/:id">
        {({ history, match }) => (
          <ProductDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/management/customers");
            }}
          />
        )}
      </Route>
      <Route path="/management/customers/fetch">
        {({ history, match }) => (
          <ProductsFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/management/customers");
            }}
          />
        )}
      </Route>
      <Route path="/management/customers/updateStatus">
        {({ history, match }) => (
          <ProductsUpdateStatusDialog
            show={match != null}
            onHide={() => {
              history.push("/management/customers");
            }}
          />
        )}
      </Route>
      <ProductsCard />
    </ProductsUIProvider>
  );
}

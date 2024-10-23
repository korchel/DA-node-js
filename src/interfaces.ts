import { Request } from "express";

export type RequestWithBody<B> = Request<{}, {}, B>;
export type RequestWithQuery<Q> = Request<{}, {}, Q, {}>;
export type RequestWithParams<P> = Request<P>;
export type RequestWithParamsAndBody<P, B> = Request<P, {}, B>;

export type RoleName = "ROLE_ADMIN" | "ROLE_USER" | "ROLE_MODERATOR";

export type DocumentType = "NOTE" | "REPORT";

export interface IDocumentType {
  id: number;
  type: DocumentType;
}

export type Role = {
  idRole: number;
  name: RoleName;
};

export interface IUser {
  id: number;
  username: string;
  email: string;
  name: string;
  lastname?: string;
  roles: Role[];
}

export interface IdParam {
  /**
   * id of current entity
   */
  id: string,
}

export interface IDocumentInputModel {
  title: string;
  number: number;
  author: IUser;
  type: IDocumentType;
  content: string;
  public_document: boolean;
  available_for: number[];
}

export interface IDocumentViewModel {
  id: number;
  title: string;
  number: number;
  author: string;  // IUser
  type: IDocumentType;
  content: string;
  creationDate?: string;
  updateDate?: string;
  public_document: boolean;
  available_for: number[];
}


export interface IDocument {
  id: number;
  title: string;
  number: number;
  author: string; // IUser
  type: IDocumentType;
  content: string;
  creationDate?: string;
  updateDate?: string;
  public_document: boolean;
  available_for: number[];
}

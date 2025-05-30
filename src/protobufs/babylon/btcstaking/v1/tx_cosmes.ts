// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file babylon/btcstaking/v1/tx.proto (package babylon.btcstaking.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgAddCovenantSigs, MsgAddCovenantSigsResponse, MsgBTCUndelegate, MsgBTCUndelegateResponse, MsgCreateBTCDelegation, MsgCreateBTCDelegationResponse, MsgCreateFinalityProvider, MsgCreateFinalityProviderResponse, MsgEditFinalityProvider, MsgEditFinalityProviderResponse, MsgSelectiveSlashingEvidence, MsgSelectiveSlashingEvidenceResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "babylon.btcstaking.v1.Msg";

/**
 * CreateFinalityProvider creates a new finality provider
 *
 * @generated from rpc babylon.btcstaking.v1.Msg.CreateFinalityProvider
 */
export const MsgCreateFinalityProviderService = {
  typeName: TYPE_NAME,
  method: "CreateFinalityProvider",
  Request: MsgCreateFinalityProvider,
  Response: MsgCreateFinalityProviderResponse,
} as const;

/**
 * EditFinalityProvider edits an existing finality provider
 *
 * @generated from rpc babylon.btcstaking.v1.Msg.EditFinalityProvider
 */
export const MsgEditFinalityProviderService = {
  typeName: TYPE_NAME,
  method: "EditFinalityProvider",
  Request: MsgEditFinalityProvider,
  Response: MsgEditFinalityProviderResponse,
} as const;

/**
 * CreateBTCDelegation creates a new BTC delegation
 *
 * @generated from rpc babylon.btcstaking.v1.Msg.CreateBTCDelegation
 */
export const MsgCreateBTCDelegationService = {
  typeName: TYPE_NAME,
  method: "CreateBTCDelegation",
  Request: MsgCreateBTCDelegation,
  Response: MsgCreateBTCDelegationResponse,
} as const;

/**
 * AddCovenantSigs handles signatures from a covenant member
 *
 * @generated from rpc babylon.btcstaking.v1.Msg.AddCovenantSigs
 */
export const MsgAddCovenantSigsService = {
  typeName: TYPE_NAME,
  method: "AddCovenantSigs",
  Request: MsgAddCovenantSigs,
  Response: MsgAddCovenantSigsResponse,
} as const;

/**
 * BTCUndelegate handles a signature on unbonding tx from its delegator
 *
 * @generated from rpc babylon.btcstaking.v1.Msg.BTCUndelegate
 */
export const MsgBTCUndelegateService = {
  typeName: TYPE_NAME,
  method: "BTCUndelegate",
  Request: MsgBTCUndelegate,
  Response: MsgBTCUndelegateResponse,
} as const;

/**
 * SelectiveSlashingEvidence handles the evidence of selective slashing launched
 * by a finality provider
 *
 * @generated from rpc babylon.btcstaking.v1.Msg.SelectiveSlashingEvidence
 */
export const MsgSelectiveSlashingEvidenceService = {
  typeName: TYPE_NAME,
  method: "SelectiveSlashingEvidence",
  Request: MsgSelectiveSlashingEvidence,
  Response: MsgSelectiveSlashingEvidenceResponse,
} as const;

/**
 * UpdateParams updates the btcstaking module parameters.
 *
 * @generated from rpc babylon.btcstaking.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;


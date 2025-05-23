// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file babylon/finality/v1/query.proto (package babylon.finality.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryBlockRequest, QueryBlockResponse, QueryEvidenceRequest, QueryEvidenceResponse, QueryListBlocksRequest, QueryListBlocksResponse, QueryListEvidencesRequest, QueryListEvidencesResponse, QueryListPublicRandomnessRequest, QueryListPublicRandomnessResponse, QueryParamsRequest, QueryParamsResponse, QueryVotesAtHeightRequest, QueryVotesAtHeightResponse } from "./query_pb.js";

const TYPE_NAME = "babylon.finality.v1.Query";

/**
 * Parameters queries the parameters of the module.
 *
 * @generated from rpc babylon.finality.v1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * ListPublicRandomness is a range query for public randomness of a given finality provider
 *
 * @generated from rpc babylon.finality.v1.Query.ListPublicRandomness
 */
export const QueryListPublicRandomnessService = {
  typeName: TYPE_NAME,
  method: "ListPublicRandomness",
  Request: QueryListPublicRandomnessRequest,
  Response: QueryListPublicRandomnessResponse,
} as const;

/**
 * Block queries a block at a given height
 *
 * @generated from rpc babylon.finality.v1.Query.Block
 */
export const QueryBlockService = {
  typeName: TYPE_NAME,
  method: "Block",
  Request: QueryBlockRequest,
  Response: QueryBlockResponse,
} as const;

/**
 * ListBlocks is a range query for blocks at a given status
 *
 * @generated from rpc babylon.finality.v1.Query.ListBlocks
 */
export const QueryListBlocksService = {
  typeName: TYPE_NAME,
  method: "ListBlocks",
  Request: QueryListBlocksRequest,
  Response: QueryListBlocksResponse,
} as const;

/**
 * VotesAtHeight queries finality providers who have signed the block at given height.
 *
 * @generated from rpc babylon.finality.v1.Query.VotesAtHeight
 */
export const QueryVotesAtHeightService = {
  typeName: TYPE_NAME,
  method: "VotesAtHeight",
  Request: QueryVotesAtHeightRequest,
  Response: QueryVotesAtHeightResponse,
} as const;

/**
 * Evidence queries the first evidence which can be used for extracting the BTC SK
 *
 * @generated from rpc babylon.finality.v1.Query.Evidence
 */
export const QueryEvidenceService = {
  typeName: TYPE_NAME,
  method: "Evidence",
  Request: QueryEvidenceRequest,
  Response: QueryEvidenceResponse,
} as const;

/**
 * ListEvidences queries is a range query for evidences
 *
 * @generated from rpc babylon.finality.v1.Query.ListEvidences
 */
export const QueryListEvidencesService = {
  typeName: TYPE_NAME,
  method: "ListEvidences",
  Request: QueryListEvidencesRequest,
  Response: QueryListEvidencesResponse,
} as const;


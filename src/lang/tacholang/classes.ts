import { rx, type tmPattern } from "../util.ts";
import modifiers from "./modifiers.ts";
import { genericTypeDefinitions } from "./genericTypeDefinition.ts";
import { fieldLike } from "./field.ts";
import typePattern from "./type.ts";
import { expression } from "./stmt-expr.ts";

const primaryConstructor: tmPattern = {
  match: rx(/([^,()]+)((,)([^,()]+))*/),
  captures: {
    "1": { patterns: [fieldLike] },
    "2": {
      patterns: [
        {
          match: ",",
          name: "punctuation.tl",
        },
        fieldLike,
      ],
    },
  },
};

const withPrimaryConstructor: tmPattern = {
  begin: rx(/(.*)(class|record|enum) ([A-Za-z0-9$_]+)(<[^>]+>)?(\()/),
  beginCaptures: {
    "1": { patterns: [modifiers] },
    "2": { name: "storage.class-type.tl" },
    "3": { name: "constant.tl.class_name" },
    "4": {
      patterns: [
        {
          match: rx(/[<>]/),
          name: "punctuation.tl",
        },
        genericTypeDefinitions,
      ],
    },
    "5": { name: "punctuation.tl" },
  },
  patterns: [primaryConstructor],
  end: rx(/\)/),
  endCaptures: {
    "0": { name: "punctuation.tl" },
  },
};

const withoutPrimaryConstructor: tmPattern = {
  match: rx(/(.*)(class|record|interface|enum) ([A-Za-z0-9$_]+)(<[^>]+>)?/),
  captures: {
    "1": { patterns: [modifiers] },
    "2": { name: "storage.class-type.tl" },
    "3": { name: "constant.tl.class_name" },
    "4": {
      patterns: [
        {
          match: rx(/[<>]/),
          name: "punctuation.tl",
        },
        genericTypeDefinitions,
      ],
    },
  },
};

const extendsAndImplementsPatterns: tmPattern[] = [
  {
    begin: rx(/(extends) ([a-zA-Z0-9$_]+(<[^>]+>)?)(\()/),
    end: rx(/\)/),
    beginCaptures: {
      "1": { name: "storage.keyword.tl" },
      "2": { patterns: [typePattern] },
      "4": { name: "punctuation.tl" },
    },
    endCaptures: {
      "0": { name: "punctuation.tl" },
    },
    patterns: [
      {
        match: rx(/,/),
        name: "punctuation.tl",
      },
      expression,
    ],
  },
  {
    match: rx(/(extends) ([a-zA-Z0-9$_]+(<[^>]+>)?)/),
    captures: {
      "1": { name: "storage.keyword.tl" },
      "2": { patterns: [typePattern] },
    },
  },
  {
    match: rx(/(implements) (([a-zA-Z0-9$_<>]+)(, ([a-zA-Z0-9$_<>]+))*)/),
    captures: {
      "1": { name: "storage.keyword.tl" },
      "2": {
        patterns: [
          {
            match: rx(/,/),
            name: "punctuation.tl",
          },
          typePattern,
        ],
      },
    },
  },
];

export default [withPrimaryConstructor, withoutPrimaryConstructor, ...extendsAndImplementsPatterns];

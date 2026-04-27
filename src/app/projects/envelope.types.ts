import React from "react";
import { Project } from "@/types/project";

export type EnvelopeSize = "sm" | "md";

export type EnvelopeShapeProps = {
  title: string;
  peekContent: React.ReactNode;
  seal: string;
  size?: EnvelopeSize;
};

export type EnvelopeCardProps = {
  project: Project;
  onClick: () => void;
};

export type MoreEnvelopeProps = {
  onClick: () => void;
};
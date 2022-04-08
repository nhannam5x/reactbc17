import { COMMENT } from "./types/fakeBookAppType";

export const commentAction = (userComment) =>  ({
    type: COMMENT,
    userComment,
  })

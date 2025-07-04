import { AggregatedResult } from "@jest/test-result";
import mockAggregatedResultBase from "./mockAggregatedResult.base";

const mockAggregatedResultMultiple: AggregatedResult = {
  ...mockAggregatedResultBase,
  testResults: [
    {
      numFailingTests: 0,
      numPassingTests: 3,
      numPendingTests: 0,
      console: undefined,
      failureMessage: null,
      numTodoTests: 0,
      snapshot: {
        added: 0,
        fileDeleted: false,
        matched: 0,
        unmatched: 0,
        updated: 0,
        unchecked: 2,
        uncheckedKeys: ["test", "test2"],
      },
      skipped: false,
      displayName: undefined,
      leaks: false,
      coverage: undefined,
      openHandles: [],
      testResults: [
        {
          title: "title b",
          status: "passed",
          ancestorTitles: ["ancestor b"],
          failureMessages: [],
          failureDetails: [],
          numPassingAsserts: 0,
          fullName: "passed",
          location: null,
          duration: 3,
        },
        {
          title: "title c",
          status: "passed",
          ancestorTitles: ["ancestor c"],
          failureMessages: [],
          failureDetails: [],
          numPassingAsserts: 0,
          fullName: "passed",
          location: null,
          duration: 3,
        },
        {
          title: "title a",
          status: "passed",
          ancestorTitles: ["ancestor a"],
          failureMessages: [],
          failureDetails: [],
          numPassingAsserts: 0,
          fullName: "passed",
          location: null,
          duration: 3,
        },
      ],
      perfStats: {
        start: 1498476492,
        end: 1498476640,
        runtime: 148,
        slow: false,
        loadTestEnvironmentEnd: 1498476492,
        loadTestEnvironmentStart: 0,
        setupAfterEnvEnd: 1498476492,
        setupAfterEnvStart: 0,
        setupFilesEnd: 1498476492,
        setupFilesStart: 0,
      },
      testFilePath: "test1-passed.js",
    },
    {
      numFailingTests: 1,
      numPassingTests: 1,
      numPendingTests: 1,
      console: undefined,
      failureMessage: null,
      numTodoTests: 0,
      snapshot: {
        added: 0,
        fileDeleted: false,
        matched: 0,
        unmatched: 0,
        updated: 0,
        unchecked: 0,
        uncheckedKeys: [],
      },
      skipped: false,
      displayName: undefined,
      leaks: false,
      coverage: undefined,
      openHandles: [],
      testResults: [
        {
          title: "title b",
          status: "pending",
          ancestorTitles: ["ancestor b"],
          failureMessages: [],
          failureDetails: [],
          numPassingAsserts: 0,
          fullName: "pending",
          location: null,
          duration: 3,
        },
        {
          title: "title c",
          status: "failed",
          ancestorTitles: ["ancestor c", "ancestor child"],
          failureMessages: [
            "Error: failures that happened\n" + "\n" + "  at stack trace",
          ],
          failureDetails: ["detailed failure"],
          numPassingAsserts: 0,
          fullName: "failed",
          location: null,
          duration: 3,
        },
        {
          title: "title a",
          status: "passed",
          ancestorTitles: ["ancestor a"],
          failureMessages: [],
          failureDetails: [],
          numPassingAsserts: 0,
          fullName: "passed",
          location: null,
          duration: 3,
        },
      ],
      perfStats: {
        start: 1498476492,
        end: 1498476639,
        runtime: 147,
        slow: false,
        loadTestEnvironmentEnd: 1498476492,
        loadTestEnvironmentStart: 0,
        setupAfterEnvEnd: 1498476492,
        setupAfterEnvStart: 0,
        setupFilesEnd: 1498476492,
        setupFilesStart: 0,
      },
      testFilePath: "test2-pending-failed-passed.js",
    },
    {
      numFailingTests: 1,
      numPassingTests: 1,
      numPendingTests: 1,
      console: undefined,
      failureMessage: null,
      numTodoTests: 0,
      snapshot: {
        added: 0,
        fileDeleted: false,
        matched: 0,
        unmatched: 0,
        updated: 0,
        unchecked: 0,
        uncheckedKeys: [],
      },
      skipped: false,
      displayName: undefined,
      leaks: false,
      coverage: undefined,
      openHandles: [],
      testResults: [
        {
          title: "title a",
          status: "pending",
          ancestorTitles: ["ancestor a"],
          failureMessages: [],
          failureDetails: [],
          numPassingAsserts: 0,
          fullName: "pending",
          location: null,
          duration: 3,
        },
        {
          title: "title c",
          status: "failed",
          ancestorTitles: ["ancestor c"],
          failureMessages: [
            "Error: failures that happened\n" + "\n" + "  at stack trace",
          ],
          failureDetails: ["detailed failure"],
          numPassingAsserts: 0,
          fullName: "failed",
          location: null,
          duration: 3,
        },
        {
          title: "title b",
          status: "passed",
          ancestorTitles: ["ancestor b"],
          failureMessages: [],
          failureDetails: [],
          numPassingAsserts: 0,
          fullName: "passed",
          location: null,
          duration: 3,
        },
        {
          title: "title d",
          status: "skipped",
          ancestorTitles: ["ancestor d"],
          failureMessages: [],
          failureDetails: [],
          numPassingAsserts: 0,
          fullName: "todo",
          location: null,
          duration: 3,
        },
      ],
      perfStats: {
        start: 1498476492,
        end: 1498476650,
        runtime: 158,
        slow: false,
        loadTestEnvironmentEnd: 1498476492,
        loadTestEnvironmentStart: 0,
        setupAfterEnvEnd: 1498476492,
        setupAfterEnvStart: 0,
        setupFilesEnd: 1498476492,
        setupFilesStart: 0,
      },
      testFilePath: "test3-pending-failed-passed-todo.js",
    },
    {
      numFailingTests: 0,
      numPassingTests: 0,
      numPendingTests: 0,
      console: undefined,
      failureMessage:
        "  \u001b[1m● \u001b[22mTest suite failed to run\n\n    SyntaxError",
      numTodoTests: 0,
      snapshot: {
        added: 0,
        fileDeleted: false,
        matched: 0,
        unmatched: 0,
        updated: 0,
        unchecked: 0,
        uncheckedKeys: [],
      },
      skipped: false,
      displayName: undefined,
      leaks: false,
      coverage: undefined,
      openHandles: [],
      testResults: [],
      perfStats: {
        start: 0,
        end: 0,
        runtime: 0,
        slow: false,
        loadTestEnvironmentEnd: 1498476492,
        loadTestEnvironmentStart: 0,
        setupAfterEnvEnd: 1498476492,
        setupAfterEnvStart: 0,
        setupFilesEnd: 1498476492,
        setupFilesStart: 0,
      },
      testFilePath: "test4-empty.js",
    },
  ],
};
export default mockAggregatedResultMultiple;

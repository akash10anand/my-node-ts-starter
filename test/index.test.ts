import {myConst} from "../src/helper";
import test from 'node:test';
import assert from 'node:assert/strict';

test("exported constant's value should be correct", (t) => {
    assert.equal(myConst, 'akash');
  });
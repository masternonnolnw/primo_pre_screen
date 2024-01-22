import { merge } from "../src/merge";

describe("merge", () => {
  it("should merge two sorted arrays", () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const result = merge(collection1, collection2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle empty arrays", () => {
    const collection1: number[] = [];
    const collection2 = [2, 4, 6];
    const result = merge(collection1, collection2);
    expect(result).toEqual([2, 4, 6]);
  });

  it("should merge two arrays with duplicate elements", () => {
    const collection1 = [1, 3, 5, 7];
    const collection2 = [2, 4, 6, 7, 8];
    const result = merge(collection1, collection2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 7, 8]);
  });

  it("should merge two arrays with negative numbers", () => {
    const collection1 = [-5, -3, -1];
    const collection2 = [-6, -4, -2];
    const result = merge(collection1, collection2);
    expect(result).toEqual([-6, -5, -4, -3, -2, -1]);
  });

  it("should merge two arrays with mixed positive and negative numbers", () => {
    const collection1 = [-3, 0, 2];
    const collection2 = [-2, 1, 4];
    const result = merge(collection1, collection2);
    expect(result).toEqual([-3, -2, 0, 1, 2, 4]);
  });

  it("should handle arrays with repeated elements", () => {
    const collection1 = [1, 2, 2, 4, 5];
    const collection2 = [2, 3, 4, 5, 6];
    const result = merge(collection1, collection2);
    expect(result).toEqual([1, 2, 2, 2, 3, 4, 4, 5, 5, 6]);
  });

  it("should handle two empty arrays", () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const result = merge(collection1, collection2);
    expect(result).toEqual([]);
  });
});

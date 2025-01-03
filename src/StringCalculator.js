export const add = (numbers) => {
  if (!numbers) return 0;

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    console.log("delimiter:::::>", delimiter);
    delimiter = parts[0].slice(2);
    console.log("delimiter:::::>", delimiter);
    numbers = parts[1];
  }

  const nums = numbers.split(new RegExp(`[${delimiter}\n]`)).map(Number);

  return nums.reduce((sum, num) => sum + num, 0);
};

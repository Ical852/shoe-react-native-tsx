export const numformat = (number: number): String => {
  const formatted = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  })
    .format(number)
    .replace('Rp', 'IDR. ');

  const splitted = formatted.split(',00');
  return splitted[0];
};

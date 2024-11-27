function InputForm() {
  const emptyCart = () => {
    console.log('デリートしようとした');
    // try {
    //   const response = await fetch(`http://localhost:3001/cart/`, {
    //     method: 'Delete',
    //   });
    //   if (response.ok) {
    //     alert('Thank you for your order!');
    //   }
    // } catch (err) {
    //   alert(`Error: ${err}`);
    // }
  };

  return (
    <div className='max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-6'>
      <h2 className='text-2xl font-bold mb-6'>Payment Information</h2>
      <form className='space-y-4'>
        {/* Name Section */}
        <div>
          <label htmlFor='name' className='block text-sm'>
            Full Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Enter your name'
            className='mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
          />
        </div>

        {/* Address Section */}
        <div>
          <label htmlFor='address' className='text-sm'>
            Address
          </label>
          <input
            type='text'
            id='address'
            name='address'
            placeholder='Enter your address'
            className='mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
          />
        </div>

        {/* Credit Card Number */}
        <div>
          <label htmlFor='cardNumber' className='text-sm'>
            Card Number
          </label>
          <input
            type='text'
            id='cardNumber'
            name='cardNumber'
            placeholder='XXXX-XXXX-XXXX-XXXX'
            className='mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
          />
        </div>

        {/* Expiry Date */}
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label htmlFor='expiry' className='text-sm'>
              Expiry Date
            </label>
            <input
              type='text'
              id='expiry'
              name='expiry'
              placeholder='MM/YY'
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
            />
          </div>

          {/* CVV */}
          <div>
            <label htmlFor='cvv' className='text-sm'>
              CVV
            </label>
            <input
              type='text'
              id='cvv'
              name='cvv'
              placeholder='XXX'
              className='mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full bg-black text-white px-6 py-3 rounded-md font-bold'
          onClick={() => {
            emptyCart();
          }}
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
}

export default InputForm;

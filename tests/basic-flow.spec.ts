import test from '../fixtures/myTest';

test.describe(`E2E tests flow`, () => {
  const productName: string=`Little Black Top`;
  const quantity:number = 1;

  test.beforeEach(async ({ mainPage }) => {
    await mainPage.goto();
  });

  test(`should returns relevant search result and adds product to cart`, async ({ header, mainPage, productDetailsPage, cartPage }) => {
    await header.searchProductByEnter(productName);
    await mainPage.selectProductByName(productName);
    await productDetailsPage.assertProductDetails(productName);
    await productDetailsPage.fillInQuantity(quantity);
    await productDetailsPage.clickAddToCartBtn();
    await header.clickCartBtn();
    await cartPage.assertCart(productName,quantity);
  });


  test(`should adds selected product, navigates to cart and proceed checkout`, async ({ mainPage, cartPage, checkoutPage }) => {
    await mainPage.addProductToCart(1, 1);
    await mainPage.clickCartBtn(); 
    //[BUG:APP]: After clicking on button `View cart` user is not redirect to /cart page
    await cartPage.assertCart(productName,quantity);
    await cartPage.clickProceedCheckoutBtn();
    await checkoutPage.assertCheckoutPage();
  });

  test(`should removes product from the cart`, async ({ header, mainPage, productDetailsPage, cartPage }) => {
    await header.searchProductByEnter(productName);
    await mainPage.selectProductByName(productName);
    await productDetailsPage.fillInQuantity(quantity);
    await productDetailsPage.clickAddToCartBtn();
    await header.clickCartBtn();
    //[BUG:APP]: User is not able to remove product from the cart by using remove button
    await cartPage.removeProduct();
    await cartPage.assertEmptyCart();
  });
});
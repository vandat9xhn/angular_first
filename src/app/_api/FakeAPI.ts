//
export const FakeAPI = () =>
    new Promise((res) => {
        setTimeout(() => {
            res(1);
        }, 500);
    });

const UserView = require('./../app/views/UserView')
describe("Test Unit for User View", () => {
    /*Requerimiento 1*/
   test("Return an error object when try to create a new user with a null playload", () => {
        const payload = null;
        const result= UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
   }); 
   /*Requerimiento 2*/
   test("Return an erro object when try to create a new user with a payload with invalid properties", () => {
        const payload = {
                id: 1,
                user: null,
                name: "Juan Morales",
                bio: "Estandar Bio para nuevos usuarios",
                dataCreated: new Date(),
                lastUpdated: new Date() 
            };
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitas tener un valor valido/)    
   });
   /*Requerimiento 3*/
   test("Return an error object when try to create a new user with a payload with missing properties", () => {
    const payload = {
            id: 1,
            /*user: "JuanMorales26",*/
            name: "Juan Morales",
            bio: "Estandar Bio para nuevos usuarios",
            dataCreated: new Date(),
            lastUpdated: new Date() 
        };
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/necesitas tener un valor valido/)    
    });
    /*Requerimiento 4*/
    test("Create a user by a given valid payload", () => {
        const payload = {
                id: 1,
                user: "JuanMorales26",
                name: "Juan Morales",
            };
        const test = UserView.createUser(payload)
        console.log(test)
        expect(test.id).toBe(1);
        expect(test.user).toBe("JuanMorales26");
        expect(test.name).toBe("Juan Morales");    
    });
});
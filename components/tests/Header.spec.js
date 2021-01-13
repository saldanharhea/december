import React from "react";
import Header from "../Header";
import { shallow } from "enzyme";

describe('Header component', () => {
        it('knows that 2 and 2 make 4', () => {
            const wrapper = shallow(<Header />);
            expect(2 + 2).toBe(4);
        });
})
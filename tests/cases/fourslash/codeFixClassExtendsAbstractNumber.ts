/// <reference path='fourslash.ts' />

//// abstract class A {
////    abstract x: number;
//// }
////
//// class C extends A {[|
//// |]}

verify.codeFixAtPosition(`x: number;
`);

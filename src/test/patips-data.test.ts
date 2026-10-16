import { describe, it, expect } from 'vitest';
import { plans, kitPackages, advisory, institutions } from '@/lib/patips-data';
describe('Document proposal values',()=>{
 it('keeps the proposed monthly and annual plan prices',()=>{expect(plans.map(p=>[p.name,p.monthly,p.annual])).toEqual([['Gratis',0,0],['Plus',9.9,99],['Premium',19.9,199],['Familia',29.9,299]]);});
 it('keeps proposed kit prices and included Premium months',()=>{expect(kitPackages.map(k=>[k.name,k.price,k.months])).toEqual([['Mini',49.9,0],['Aprende',89.9,1],['Premium',149.9,3]]);});
 it('keeps the advisory proposed prices',()=>{expect(advisory.map(a=>a[2])).toEqual([39.9,59.9,79.9,89.9,99.9,119.9]);});
 it('keeps institutional prices and family limits',()=>{expect(institutions.map(p=>[p.price,p.families])).toEqual([[99,30],[199,80],[349,150]]);});
});

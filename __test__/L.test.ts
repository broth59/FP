import { _, L } from '../src'
import { assert } from 'console'

describe('lazy function', ()=>{
	
	describe('each', ()=>{
		it('transfrom list to lazy generator', ()=>{
			const name_list = ['java']
			const name_list_generator = L.each(name_list)
			const first_value = name_list_generator.next().value
			expect(first_value[0]).toBe(0)
			expect(first_value[1]).toEqual('java')
		})
		
	})

	describe('map', ()=>{
		it('transfrom each sync value', ()=>{
			const name_list = ['java', 'scara']
			const name_with_gender_list = L.map((name)=>name+'Gender', name_list)
			expect(_.head(name_with_gender_list)).toEqual('javaGender')
			expect(_.last(name_with_gender_list)).toEqual('scaraGender')
		})

		it('tarnsfrom each async value', async ()=>{
			const async_name_list = [ Promise.resolve('java'), Promise.resolve('scara') ]
			const async_name_with_gender_genrator = L.map((name)=>name+'Gender', async_name_list)
			expect(await async_name_with_gender_genrator.next().value).toEqual('javaGender')
			expect(await async_name_with_gender_genrator.next().value).toEqual('scaraGender')
		})
	})

	describe('filter', ()=>{
		it('filter each sync value', ()=>{
			const name_list = ['java', 'scara', 'jvm']
			const name_generator = L.filter((name)=>name.startsWith('j'), name_list)
			
			for(const name of name_generator){
				expect(name.startsWith('j')).toBe(true)
			}
		})
		
		it('filter each async value', async ()=>{
			const async_name_list = [ Promise.resolve('java'), Promise.resolve('scara'), Promise.resolve('jvm') ]
			const async_name_genrator = L.filter((name)=>name.startsWith('j'), async_name_list)
			
			expect((await async_name_genrator.next().value).startsWith('j')).toBe(true)
			expect(async_name_genrator.next().value.catch(()=>'CATCH')).resolves.toEqual('CATCH')
			expect((await async_name_genrator.next().value).startsWith('j')).toBe(true)
			
		})
	})

	
})
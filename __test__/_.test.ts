import { _ } from '../src'
import { S_IFDIR } from 'constants'

describe('underscore function', ()=>{
	
	describe('map', ()=>{
		it('transfrom each sync value', ()=>{
			const name_list = ['java', 'scara']
			const name_with_gender_list = _.map((name)=>name+'Gender', name_list)
			expect(_.head(name_with_gender_list)).toEqual('javaGender')
			expect(_.last(name_with_gender_list)).toEqual('scaraGender')
		})

		it('tarnsfrom each async value', async ()=>{
			const async_name_list = [ Promise.resolve('java'), Promise.resolve('scara') ]
			const async_name_with_gender_list = await _.map((name)=>name+'Gender', async_name_list)
			expect(_.head(async_name_with_gender_list)).toEqual('javaGender')
			expect(_.last(async_name_with_gender_list)).toEqual('scaraGender')
		})
		
	})


	describe.only('tap', ()=>{
		it('tap each sync value', ()=>{
			let count = 0
			const list = _.go( [123,123,123,1], _.tap(()=>++count) )
			const programming_language_list = ['java', 'kotlin', 'ruby', 'python', 'rust']
			const const_variable_list = _.go(
				programming_language_list,
				// _.filter(programming_language=>programming_language.startsWith('r')),
				_.tap(()=>''),
				// _.map(programming_language=>'const'),
			)
			expect(count).toBe(4)
		})

		it('tap each async value', async ()=>{
			const list = _.tap(()=>'', new Array(4).fill(' ').map(x=>Promise.resolve(x)))
			
		})
		
	})

	
	
})
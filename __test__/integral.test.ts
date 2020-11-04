import { _, L, C } from '../src'
let state = {} as any
const doNothing = jest.fn()


beforeEach(()=>{
	state = {}
})

describe('FP integral test', ()=>{

	describe('transform sync list', ()=>{

		it('statically', ()=>{
			const programming_language_list = ['java', 'kotlin', 'ruby', 'python', 'rust']
			const const_variable_list = _.go(
				programming_language_list,
				_.filter(programming_language=>programming_language.startsWith('r')),
				_.tap(()=>''),
				_.map(programming_language=>'const'),
			)
			for(const const_variable of const_variable_list){
				expect(const_variable).toEqual('const')
			}
			
		})

		it('lazily', ()=>{
			const programming_language_list = ['java', 'kotlin', 'ruby', 'python', 'rust']
			const const_variable_list = _.go(
				programming_language_list,
				L.filter(programming_language=>programming_language.startsWith('r')),
				L.tap(()=>''),
				L.map(programming_language=>'const'),
				_.takeAll
			) 

			for(const const_variable of const_variable_list){
				expect(const_variable).toEqual('const')
			}
		})


		it('cocurrenctly', async ()=>{
			const programming_language_list = ['java', 'kotlin', 'ruby', 'python', 'rust']
			const const_variable_list = await _.go(
				programming_language_list,
				C.filter(programming_language=>programming_language.startsWith('r')),
				C.map(programming_language=>'const'),
				C.takeAll
			) 

			for(const const_variable of const_variable_list){
				expect(const_variable).toEqual('const')
			}
		})
		
	})


	describe('transform async list', ()=>{

		it('statically', async ()=>{
			const programming_language_list = ['java', 'kotlin', 'ruby', 'python', 'rust'].map(x=>Promise.resolve(x))
			const const_variable_list = await _.go(
				programming_language_list,
				_.filter(programming_language=>programming_language.startsWith('r')),
				_.tap(()=>''),
				_.map(programming_language=>'const'),
			)
			for(const const_variable of const_variable_list){
				expect(const_variable).toEqual('const')
			}
			
		})

		it('lazily', async ()=>{
			const programming_language_list = ['java', 'kotlin', 'ruby', 'python', 'rust'].map(x=>Promise.resolve(x))
			const const_variable_list = await _.go(
				programming_language_list,
				L.filter(programming_language=>programming_language.startsWith('r')),
				L.tap(()=>''),
				L.map(programming_language=>Promise.reject(programming_language)),
				L.catchNoop,
				_.takeAll
			).catch(e=>{
				expect(e).toEqual('ruby')				
			})

		})


		it('cocurrenctly', async ()=>{
			const programming_language_list = ['java', 'kotlin', 'ruby', 'python', 'rust'].map(x=>Promise.resolve(x))
			const const_variable_list = await _.go(
				programming_language_list,
				C.filter(programming_language=>programming_language.startsWith('r')),
				C.map(programming_language=>'const'),
				C.takeAll
			) 

			for(const const_variable of const_variable_list){
				expect(const_variable).toEqual('const')
			}
		})
		
	})
	
})
module Jekyll
	module RemoveFrontMatterFilter
		def removefrontmatter input
			# find the first
			first = input.index("---")
			if (first == nil)
				input
			end

			# find the second
			second = input.index("---", first + 1)
			if (second == nil)
				input
			end

			#strip the string
			input[first..second + 2] = ''
			#return input
			input
		end
	end
end
Liquid::Template.register_filter Jekyll::RemoveFrontMatterFilter

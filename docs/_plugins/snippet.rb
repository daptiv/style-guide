require 'pygments'

module Jekyll
    class SnippetBlock < Liquid::Block

        def initialize(tag_name, lang, tokens)
            super
            @lang = lang.strip
        end
        
        def render(context)
           code = super.to_s.strip
           highlighted = Pygments.highlight(code, :lexer => @lang, :formatter => 'html', :options => { :encoding => 'utf-8', :startinline => true})

           
           "<div class=\"snippet\">\n" +
           "<div class=\"snippet-src-button-container\">\n" +
           "<button type=\"button\" class=\"snippet-src-button\" title=\"Show Source\"" +
           " onclick=\"var s = this.parentElement.parentElement.querySelector('.snippet-content').style;" +
           " var visible = (s.display === 'block'); s.display = visible ? 'none' : 'block';this.innerText= (visible ? 'Show' : 'Hide') + ' Source';\"" +
           ">Show Source</button>\n" +
           "</div>\n" +
           "<div class=\"snippet-header\">\n" +
           "#{code}\n" +
           "</div>\n" +
           "<div class=\"snippet-content\">\n" +
           "#{highlighted}\n" +
           "</div>\n" +
           "</div>"
        end
    end
end

Liquid::Template.register_tag('snippet', Jekyll::SnippetBlock)

